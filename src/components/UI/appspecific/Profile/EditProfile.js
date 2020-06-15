import React from "react"
// import { Stagger } from "../Containers"
// import styled from "styled-components"
import Paper from "../Paper"

export default props => {
  const {
    editedProfile,
    handleStringChange,
    handleArrayItemChange,
    addToArray,
    handleArrayItemDeleteClicked,
  } = props
  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log("hello")
        }}
      >
        <input
          value={editedProfile.name}
          onChange={handleStringChange}
          name="name"
        />
        <h2>Favourite Bands/Artists:</h2>
        {editedProfile.favouritebands.map((item, index) => (
          <div key={index + index * 12.5}>
            <input
              value={item}
              onChange={e => handleArrayItemChange(e, index, "favouritebands")}
              placeholder="Band/artist.."
            />
            <span
              onClick={() =>
                handleArrayItemDeleteClicked(index, "favouritebands")
              }
            >
              delete this bitch
            </span>
          </div>
        ))}
        {editedProfile.favouritebands.length !== 3 && (
          <button onClick={() => addToArray("favouritebands")}>Add item</button>
        )}
        <h2>Instruments you play:</h2>
        {editedProfile.instruments.map((item, index) => (
          <div key={index + index * 12.5}>
            <input
              value={item}
              onChange={e => handleArrayItemChange(e, index, "instruments")}
              placeholder="Instrument.."
            />
            <span
              onClick={() => handleArrayItemDeleteClicked(index, "instruments")}
            >
              delete this bitch
            </span>
          </div>
        ))}
        {editedProfile.instruments.length !== 3 && (
          <button onClick={() => addToArray("instruments")}>Add item</button>
        )}
        <h2>Date of birth:</h2>
        <input
          type="date"
          name="dateofbirth"
          value={editedProfile.dateofbirth}
          onChange={handleStringChange}
        />
        <h2>Hometown:</h2>
        <input
          type="text"
          onChange={handleStringChange}
          name="town"
          value={editedProfile.town}
        />
        {JSON.stringify(editedProfile)}
        <h2>Description:</h2>
        <textarea
          type="text"
          name="description"
          placeholder="description of you.."
          onChange={handleStringChange}
          value={editedProfile.description}
        />
      </form>
    </Paper>
  )
}
//favouritebands
//instruments
