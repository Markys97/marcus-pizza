import'./style/controlButton.css'

function ControlButton({children,type,handlerClick}) {
  return (
<button onClick={()=> handlerClick()} className={`button-control ${type!==undefined ? `button-control--${type}`:''}`}>
    <div className="button-control__icon">
      {children}
    </div>
</button>
  )
}

export default ControlButton