import './Categories.css'

const categories = [
  {
    key: "all",
    name: "all"
  },
  {
    key: "vodka",
    name: "vodka"
  },
  {
    key: "jucy",
    name: "jucy"
  },
  {
    key: "coctel",
    name: "coctel"
  },
  {
    key: "fresh",
    name: "fresh"
  },
  {
    key: "beer",
    name: "beer"
  },
  {
    key: "wisski",
    name: "wisski"
  },
]

const Categories = ({chooseCategory}) => {

  return(
    <div className="categories">
        {
          categories.map((el) => {
            return(
              <div key={el.key} onClick={ () => chooseCategory(el.key)}>
                <p>{el.name}</p>
              </div>
            )
          })
        }
    </div>
  )
} 

export default Categories;
