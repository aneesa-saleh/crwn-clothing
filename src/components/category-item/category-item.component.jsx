import { CategoryBodyContainer, BackgroundImage, CategoryItemContainer } from "./category-item.styles";

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;

    return (
        <CategoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop now</p>
            </CategoryBodyContainer>
        </CategoryItemContainer>
    )
};

export default CategoryItem;