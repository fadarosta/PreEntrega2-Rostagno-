import item from './Components/item/item.jsx'

const itemList = ({ packsDeClases }) => {
    return(
        <>
        {packs.map((pack) => {
            return (
                <div key={pack.id}>
                    <h3>{pack.title}</h3>
                    <p>{pack.price}</p>
                    <p>{pack.descriprion}</p>
                </div>
            )
        })}
    </>
    )
}

export default itemList