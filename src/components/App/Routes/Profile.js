import React from "react"
import { Stagger, RouteContainer } from "../../UI/appspecific/Containers"
import { connect } from "react-redux"
import yes from "../../../images/profilelogo.svg"
import { navigate } from "gatsby"
//UI IMPORTS
import Paper from "../../UI/appspecific/Paper"
import InformationContainer from "../../UI/appspecific/Profile/InformationContainer"
import {
  BannerContainer,
  Banner,
} from "../../UI/appspecific/Profile/BannerComp"
import {
  InformationGrid,
  ContentContainer,
} from "../../UI/appspecific/Profile/Container"
import EditProfileButton from "../../UI/appspecific/Profile/EditProfileButton"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdMail, MdAddAPhoto, MdSave, MdEdit } from "react-icons/md"
import GTMB from "../../UI/appspecific/Profile/GTMB"
import Spinner from "../../UI/appspecific/Spinner"
import firebase from "../../../firebase/firebase"
import EditProfile from "../../UI/appspecific/Profile/EditProfile"
import firebase2 from "firebase"
function getAge(DOB) {
  var today = new Date()
  var birthDate = new Date(DOB)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1
  }

  return age
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.firebase = firebase()
  }
  state = {
    profile: {},
    curUserProfile: false,
    loading: true,
    editedProfile: {},
  }
  componentDidMount() {
    const { profile, userid } = this.props

    if (profile.userid === userid) {
      this.setState({
        profile: {
          ...this.props.profile,
          dateofbirth: this.props.profile.dateofbirth.toDate(),
        },
        curUserProfile: true,
        loading: false,
        editedProfile: {
          ...this.props.profile,
          dateofbirth: this.props.profile.dateofbirth.toDate(),
        },
        editable: true,
        editing: false,
      })
    } else {
      this.firebase
        .firestore()
        .collection("profiles")
        .doc(userid)
        .get()
        .then(doc => {
          if (doc.exists) {
            this.setState({ profile: doc, loading: false })
          } else {
            navigate("/app/")
          }
        })
        .catch(e => this.setState({ loading: false, error: e }))
    }
  }
  setEditing = i => {
    if (this.state.editable) {
      if (i === "save") {
        this.handleSaveEditedProfile()
      } else {
        this.setState({ editing: true })
      }
    }
  }
  handleStringChange = e => {
    const newEditedProfile = { ...this.state.editedProfile }
    newEditedProfile[e.target.name] = e.target.value
    this.setState({ editedProfile: newEditedProfile })
  }
  handleArrayItemChange = (e, i, a) => {
    const newEditedProfile = { ...this.state.editedProfile }
    newEditedProfile[a][i] = e.target.value
    this.setState({ editedProfile: newEditedProfile })
  }
  handleAddToArrayClicked = a => {
    const newEditedProfile = { ...this.state.editedProfile }
    if (newEditedProfile[a].length < 3) {
      newEditedProfile[a].push("")
      this.setState({ editedProfile: newEditedProfile })
    }
  }
  handleArrayItemDeleteClicked = (i, a) => {
    const newEditedProfile = { ...this.state.editedProfile }
    newEditedProfile[a].splice(i, 1)
    this.setState({ editedProfile: newEditedProfile })
  }
  handleSaveEditedProfile = () => {
    this.setState({ loading: true, editing: false })
    const { editedProfile } = this.state
    this.firebase
      .firestore()
      .collection("profiles")
      .doc(this.props.userid)
      .set({
        userid: this.props.userid,
        name: editedProfile.name,
        description: editedProfile.description,
        dateofbirth: firebase2.firestore.Timestamp.fromDate(
          new Date(editedProfile.dateofbirth)
        ),
        instruments: editedProfile.instruments.filter(item => item),
        favouritebands: editedProfile.favouritebands.filter(item => item),
        town: editedProfile.town,
      })
      .then(data => {
        if (data) console.log(data)
        this.setState({
          loading: false,
          profile: {
            ...this.props.profile,
            dateofbirth: this.props.profile.dateofbirth.toDate(),
          },
        })
      })
      .catch(e => {
        console.log(e)
        this.setState({ loading: false })
      })
  }
  render() {
    const {
      profile,
      curUserProfile,
      loading,
      editable,
      editing,
      editedProfile,
    } = this.state
    const { state } = this.props
    console.log(profile)
    // const dob =
    //   Object.keys(profile).length > 0 ? profile.dateofbirth.toDate() : null
    return (
      <RouteContainer>
        {!loading ? (
          <>
            <Stagger state={state}>
              <Paper>
                <Banner>
                  <BannerContainer>
                    <figure>
                      <img
                        src={profile.profilepicture || yes}
                        alt="profilepicture"
                      />
                      {curUserProfile && <MdAddAPhoto />}
                    </figure>
                    <div>
                      <h1>{profile.name}</h1>
                      <h2>
                        <FaMapMarkerAlt />
                        {profile.town || "Amsterdam, NL"}
                      </h2>
                    </div>
                    {!curUserProfile && (
                      <GTMB to="/app/messages">
                        <MdMail /> <span>Message</span>
                      </GTMB>
                    )}
                    {editable && !editing ? (
                      <EditProfileButton
                        key="edit"
                        onClick={() => this.setEditing("edit")}
                        secondary
                      >
                        <MdEdit />
                        <span> Edit</span>
                      </EditProfileButton>
                    ) : editable && editing ? (
                      <EditProfileButton
                        key="save"
                        onClick={() => this.setEditing("save")}
                      >
                        <MdSave /> <span>Save</span>
                      </EditProfileButton>
                    ) : null}
                  </BannerContainer>
                </Banner>
                <Stagger delay=".3s" state={state}></Stagger>
              </Paper>
            </Stagger>
            <ContentContainer>
              {!editing ? (
                <Stagger state={state} key="content" delay=".3s">
                  <InformationGrid>
                    <Paper>
                      <InformationContainer>
                        <h2>Name</h2>
                        <p>{profile.name}</p>
                        <h2>Age</h2>
                        <p>{getAge(profile.dateofbirth)} years old</p>
                        <h2>Hometown</h2>
                        <p>
                          {profile.town
                            ? profile.town.charAt(0).toUpperCase() +
                              profile.town.slice(1)
                            : "--"}
                        </p>
                      </InformationContainer>
                    </Paper>
                    <Paper>
                      <InformationContainer>
                        <h2>About me</h2>
                        <p>{profile.description || "--"}</p>
                        <h2>Favorite bands:</h2>
                        <ul>
                          {/* {profile.favouritebands.length &&
                        profile.favouritebands.length */}
                          {profile.favouritebands.map(band => (
                            <li key={band}>{band}</li>
                          ))}
                        </ul>
                      </InformationContainer>
                    </Paper>
                  </InformationGrid>
                </Stagger>
              ) : (
                <Stagger key="edit" state={state} delay=".3s">
                  <EditProfile
                    editedProfile={editedProfile}
                    handleArrayItemChange={this.handleArrayItemChange}
                    handleStringChange={this.handleStringChange}
                    addToArray={this.handleAddToArrayClicked}
                    handleArrayItemDeleteClicked={
                      this.handleArrayItemDeleteClicked
                    }
                    // handleSaveEditedProfile={this.handleSaveEditedProfile}
                  />
                </Stagger>
              )}
            </ContentContainer>
          </>
        ) : (
          <Spinner />
        )}
      </RouteContainer>
    )
  }
}

const mapState = state => {
  return { profile: state.auth.profile, user: state.auth.user }
}

export default connect(mapState)(Profile)
