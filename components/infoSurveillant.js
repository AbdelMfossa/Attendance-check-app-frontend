import React from 'react'

const InfoSurveillant = ({ dataSurveillant }) => {

  const {nom, matricule, phone, qualite} = dataSurveillant;

  return (
    <tr>
      <td>{nom}</td>
      <td>{matricule}</td>
      <td>{phone}</td>
      <td>S005</td>
      <td>{qualite}</td>
      <td>5</td>
      <td>Afficher</td>
    </tr>
  )
}

export default InfoSurveillant;
