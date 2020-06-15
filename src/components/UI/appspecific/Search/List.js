import React, { useState } from "react"
import styled, { css } from "styled-components"
import { connect } from "react-redux"
import { useEffect } from "react"
import firebaseInstance from "../../../../firebase/firebase"
import GenericProfileLogo from "../../../../images/profilelogo.svg"

const commonCss = css`
  max-width: 67rem;
  background: #333;
  padding: 2rem;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  display: flex;
  transition: transform 0.3s;
  cursor: pointer;
  h2 {
    font-weight: 300;
  }
  :hover {
    transform: scale(1.01);
  }
`

const ProfileListItemComp = styled.div`
  ${commonCss}
  img {
    height: 5rem;
    width: 5rem;
    border: 3px solid var(--ColorPrimaryFaded);
    border-radius: 50%;
    margin-right: 2rem;
  }
`
const ProfileListItem = props => {
  const { item } = props
  return (
    <ProfileListItemComp>
      <img
        src={item.profilepic ? item.profilepic : GenericProfileLogo}
        alt="profilepicture"
      />
      <div>
        <h2>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
      </div>
    </ProfileListItemComp>
  )
}
const BandListingListItemComp = styled.div`
  ${commonCss}
`

const BandListingListItem = props => {
  return (
    <BandListingListItemComp>
      <p>no</p>
      <img alt="listingpicture" />
      {props.children}
    </BandListingListItemComp>
  )
}

const mapState = state => {
  return {
    city: state.listing.city,
    searchCrit: state.listing.searchCrit,
    userProfile: state.auth.profile,
  }
}
export default connect(mapState)(props => {
  const { searchCrit, city } = props
  const [list, setList] = useState([])
  const firebase = firebaseInstance()
  useEffect(() => {
    const collection = searchCrit.crit === "band" ? "band" : "profile"
    if (city) {
      firebase
        .firestore()
        .collection(collection)
        .where("town", "==", city)
        .where("instruments", "array-contains", searchCrit.instrument)
        .get()
        .then(querySnapShot => {
          const newList = []
          querySnapShot.forEach(snap => {
            newList.push(snap.data())
          })
          setList(newList)
        })
        .catch(e => setList([]))
    } else {
      firebase
        .firestore()
        .collection(collection)
        .get()
        .then(querySnapShot => {
          const newList = []
          querySnapShot.forEach(snap => {
            newList.push(snap.data())
          })
          setList(newList)
        })
        .catch(e => setList([]))
    }
  }, [searchCrit, city, firebase])
  return (
    <>
      {searchCrit.crit === "band" ? (
        <>
          {list.map((item, index) => (
            <BandListingListItem>{item.toString()}</BandListingListItem>
          ))}
        </>
      ) : (
        <>
          {list.map((item, index) => (
            <ProfileListItem delay={index} key={item.userid} item={item} />
          ))}
        </>
      )}
    </>
  )
})
