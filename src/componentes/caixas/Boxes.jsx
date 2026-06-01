import style from "./boxes.module.css"

function Boxes({items}) {
    function showBoxes(){
        return (
            <>
                {items.map((box, i) => 
                    <div key={i}>
                        <div>
                            <img src={box.imagem} alt="" />
                        </div>
                        <span>{box.texto}</span>
                    </div>
                )}
            </>
        )
    }

    return (
        <div className={style.containerBoxes}>
            {showBoxes()}
        </div>
    );
}

export default Boxes;