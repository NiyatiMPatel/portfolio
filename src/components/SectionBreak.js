function SectionBreak(props) {
 return (
  <div className="section-break">
   <div className={props.className}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
     <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={props.bgColor} className="shape-fill"></path>
    </svg>
   </div>
  </div>
 )
}
export default SectionBreak