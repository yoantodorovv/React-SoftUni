export const getDto = (values) => {
    return {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        imageUrl: values.imageUrl,
        phoneNumber: values.phoneNumber,
        address: {
          country: values.country,
          city: values.city,
          street: values.street,
          streetNumber: values.streetNumber,
        }
    }
};