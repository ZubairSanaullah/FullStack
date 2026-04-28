import Hello from './components/hello'

const Home = () => {
  console.log("Next JS is a framework for building web applications.")
  return (
    <main>
      <div className='text-5xl'>Welcome to NextJs</div>
      <Hello />
    </main>
  )
}

export default Home