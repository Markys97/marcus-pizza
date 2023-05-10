import'./style/controlButton.css'

function ControlButton({children,type}) {
  return (
<button className={`button-control ${type!==undefined ? `button-control--${type}`:''}`}>
    <div className="button-control__icon">
      {children}
    </div>
</button>
  )
}

export default ControlButton