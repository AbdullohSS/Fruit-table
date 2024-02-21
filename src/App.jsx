import './App.css'
import Fruit from './Fruit'


const data = [
  {id:1, img: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=',
   title:'Apple', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
  {id:2, img: 'https://www.shutterstock.com/image-photo/isolated-apricots-fresh-whole-apricot-600nw-770858806.jpg',
   title:'Apricot', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
  {id:3, img: 'https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg',
   title:'Banana', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
  {id:4, img: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D', 
  title:'Kiwi', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
  {id:5, img: 'https://cdn.shopify.com/s/files/1/2182/2603/files/redchilipepper.jpg?v=1669750479', 
  title:'Chili', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
  {id:6, img: 'https://media.istockphoto.com/id/1412854156/photo/strawberries-isolated-strawberry-whole-and-a-half-on-white-background-strawberry-slice-with.jpg?s=612x612&w=0&k=20&c=sg8D6YofX0K9og_ugF4R50QrPAKQUvHn5vJGfr-7Zk4=', 
  title:'Strawberry', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
  {id:7, img: 'https://yogisorganic.com/cdn/shop/products/Pineapple_600x@2x.jpg?v=1496866405',
   title:' Pineapple', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
  {id:8, img: 'https://www.shutterstock.com/image-photo/orange-fruit-slices-leaves-isolated-260nw-1386912362.jpg', 
  title:'Orange', uom:' 02 ', size:'02', unit: '$8.99', total: '$17.89'},
]

function App() {
  return (
    <div className='container'> 
    {
      data.map((value,index )=>{
        return (
        <div>
          <Fruit data = {value}/>
        </div>
        )
      })
    }
    </div>
  );
}

export default App
