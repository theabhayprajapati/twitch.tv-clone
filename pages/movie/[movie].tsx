import { useRouter } from 'next/router'
import React from 'react'

const MoviesShow = () => {
    const router = useRouter()
    console.log(router.query.id)
    return (
        <div>MoviesShow</div>
    )
}

export default MoviesShow