import { useState } from "react";

const initialState = {
    title: '',
    author: '',
    genres:'',
}


const Form = () => {

    const [state, setstate] = useState({ ...initialState })
    
    const handleChange = ({target}) => {
        const { name, value } = target;
        setstate(prevState => {
            return{...prevState,[name]:value}
        })
    }

    console.log(state)
    
    
    // const [title, setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    // const [genres, setGenres] = useState('');

    const { title, author, genres } = state;

    return (
        <form action="" autoComplete="on">
            <label>
                Title
                 <input onChange={handleChange} type="text" name="title" id="" value={title} />
            </label>
            <label>
                Author
                 <input  onChange={handleChange} type="text" name="author" id="" value={author}  />
            </label>
            <label>
               Genres
                 <input  onChange={handleChange} type="text" name="genres" id=""  value={genres} />
            </label>

           


    </form>
)
}

export default Form;