const resolveLink = ( path: string ) => {
    path = path === 'home' ? '/' : path
    return path
}
export default resolveLink