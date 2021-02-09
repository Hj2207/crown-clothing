import { createSelector } from 'reselect'

/*there are 2 types of selectors input and output selector
    input selector does not require createSelector and o/p selector
    can use  input selector, output selector and createSelector to create themselves */


// input selector takes the whole state and just returns a slice of it
const selectCart = state => state.cart;

//output selector (memoi selector) : using input selector and createSelector

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
    );

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
     cartItems.reduce( (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity 
     ,0)
)
