const userDetails = async({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    
  return (
    <div>
        <h1>User Details: {id}</h1>
    </div>
  )
}

export default userDetails