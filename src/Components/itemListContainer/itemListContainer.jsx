
const [packs, setPacks] = useState([])

useEffect(() => {
    clasesPromise.then(res => {
        console.log(res)
        setPacks(res)
    })
}, [])

return(
    <itemList packsDeClases={packsDeClases}/>
)

export default ItemListContainer