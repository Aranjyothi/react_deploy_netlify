# BookshelfApp
site is live
## About the Bookshelf App"
In the bookshelves app, you can see different types of books like novels, fiction and non-fiction, study related, and many more. Here, the client can access only limited books available in the bookshelves app. if the client wants to know about the book. I have provided a brief description of the specific book. They can also check the book ratings.

## Technologies that i have used:
React,  JSX, HTML, CSS, JavaScript 

# Instalastions are:
For the **Bookshelf App** some packages that may need to be install:
npx create-react-app
react-dom
bootstrap for CSS
## Routes
Routes are avaliable as bookshelf
**/Home**
**/favorite**
**/About**
## Challenges are:
During my Project I face so technical challenges. My main challengers are how to render the page and data.
## Code:
function BookDetails({favorites,addMoreToFavorite}) {
    let params = useParams()
    let navigate = useNavigate()

    let[ bookdetails, setBookdetails] = useState({})
    useEffect(()=>{
        const book = favorites.filter((b) => params.id === b.itemid)
        console.log(book)
        if(book.length){
            setBookdetails(book[0])
        } else{
            navigate('/')
        }
    }, [favorites])

## Future Implimentations:
* Need to create login page.
* Adding more details about my **BookShelfApp** for the customer.
* Need to Provide more virtual book access.