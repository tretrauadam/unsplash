export default async function serverSideCall(req, res) {
    const {
        query: {firstName, lastName},
    } = req;

    const baseUrl = `https://api.example-product.com/v1/search? lastName=${lastName}&firstName=${firstName}&apikey=${process.env.KEY}`;

    const response = await fetch(baseUrl);
    res.status(200).json({ 
        data: response.data,
    }); 
}