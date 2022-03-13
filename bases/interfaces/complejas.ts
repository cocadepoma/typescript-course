(() => {
  interface Address {
    id: number;
    zip: string;
    city: string;
  };

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress: (id: string) => string;
  }

  const client: Client = {
    name: 'Fernando',
    age: 45,
    address: {
      id: 125,
      zip: 'KYD SUD',
      city: 'Ottawa',
    },
    getFullAddress: (id: string) => {
      return `${client.address.zip} ${client.address.city}`;
    }
  }

  console.log(client.getFullAddress('id'));
})();