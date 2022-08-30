export const cartInitialState = {
  isLoading: false,
  cart: [
    {
      book: {
        title: 'Microsoft Office Inside Out',
        subtitle: 'Office 2021 and Microsoft 365',
        isbn13: '9780137564095',
        price: '$36.93',
        image: 'https://itbook.store/img/books/9780137564095.png',
        url: 'https://itbook.store/books/9780137564095',
      },
      itemPrice: 36.93,
      quantity: 2,
      itemTotal: 73.86,
    },
    {
      book: {
        title: 'Microsoft Excel Step by Step',
        subtitle: 'Office 2021 and Microsoft 365',
        isbn13: '9780137564279',
        price: '$30.32',
        image: 'https://itbook.store/img/books/9780137564279.png',
        url: 'https://itbook.store/books/9780137564279',
      },
      itemPrice: 30.32,
      quantity: 1,
      itemTotal: 30.32,
    },
    {
      book: {
        title:
          'Microsoft Excel Data Analysis and Business Modeling, 7th Edition',
        subtitle: 'Office 2021 and Microsoft 365',
        isbn13: '9780137613663',
        price: '$34.87',
        image: 'https://itbook.store/img/books/9780137613663.png',
        url: 'https://itbook.store/books/9780137613663',
      },
      itemPrice: 34.87,
      quantity: 5,
      itemTotal: 174.35,
    },
    {
      book: {
        title: 'Intermediate Statistics with R',
        subtitle: '',
        isbn13: '1001651662833',
        price: '$0.00',
        image: 'https://itbook.store/img/books/1001651662833.png',
        url: 'https://itbook.store/books/1001651662833',
      },
      itemPrice: 0.0,
      quantity: 1,
      itemTotal: 0.0,
    },
  ],
  cartTotal: 278.53,
};
