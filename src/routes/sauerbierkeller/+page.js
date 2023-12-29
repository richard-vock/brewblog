export async function load({ fetch }) {
    const response = await fetch('api/posts')
    let posts = await response.json()
    posts = posts.filter(post => post.category !== 'Sauerbierkeller');
    return { posts };
}
