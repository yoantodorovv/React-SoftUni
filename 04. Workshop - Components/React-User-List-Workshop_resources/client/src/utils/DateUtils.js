export const formatDate = (input) => 
    new Date(input)
    .toLocaleString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });