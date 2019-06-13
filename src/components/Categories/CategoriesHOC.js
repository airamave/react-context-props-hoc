import React from 'react';

function CategoriesHOC() {
    return WrappedComponent => {
        const categories = async () => {
            const data = await fetch('https://api.chucknorris.io/jokes/categories')
                    .then(response => response.json());
            return (
                <WrappedComponent
                categories={data}
                />
            );
        }
        return categories;
    }
}

export default CategoriesHOC;