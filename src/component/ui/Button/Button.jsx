import './style/button.css'

function Button({textButton,children,type}) {
  return (
    <button className={`button-simple ${type !==undefined? `button-simple--${type}`:''}`}>
        <div className="button-simple__content">
            {
                  (children!== undefined) && (
                    <div className="button-simple__icon">
                        {children}
                    </div>
                  )
            }
           
            <div className="button-simple__text">
               {textButton}
            </div>
        </div>
    </button>
  )
}

export default Button