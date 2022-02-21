import React from 'react'
import CV_EN from '../../assets/nkouba_marius_cv_english_version.pdf'
import CV_FR from '../../assets/nkouba_marius_cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV_EN} download className="btn">Download CV</a>
        <a href={CV_FR} download className="btn">Télécharger le CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA