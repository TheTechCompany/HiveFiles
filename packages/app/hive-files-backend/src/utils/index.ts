export const getCypherQueryForPath = (path: string) => {
    let parts = path.split('/').slice(1).filter((a) => a.length > 0);

    let query = parts.map((path_part, ix) => {
        return `({name: $path_parts[${ix}]})`
    }).join(`-[:HAS_FILE]->`)

    return {
        query: query.length > 0 ? `-[:HAS_FILE]->${query}` : '',
        path: parts
    }
}