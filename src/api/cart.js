import { ENV } from "@/utils";

export class Cart {
  add(gameId) {
    const cart = this.getAll();
    
    const index = cart.findIndex((item) => item.id === gameId);
    if (index < 0) {
      cart.push({ id: gameId, quantity: 1 });
    } else {
        const game = cart[index];
      cart[index].quantity = game.quantity + 1;
    }
    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  getAll() {
    const cart = localStorage.getItem(ENV.CART);
    if (!cart) {
      return [];
    } else {
      return JSON.parse(cart);
    }
  }

  count () {
        const cart = this.getAll();


        let count = 0;

        cart.forEach((item) => {
            count += item.quantity;
        });
        return count;
    }
}
