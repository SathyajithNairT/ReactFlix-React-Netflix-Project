


export function ShuffleGenreList(genre) {
    for (let i = genre.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [genre[i], genre[j]] = [genre[j], genre[i]];
    }
    return genre;
}