import Item from "../Item/Item";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((pack) => (
                <Item
                    key={pack.id}
                    title={pack.title}
                    price={pack.price}
                    description={pack.description}
                    pictureUrl={pack.pictureUrl}
                />
            ))}
        </div>
    );
};

export default ItemList;
