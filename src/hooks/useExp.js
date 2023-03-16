export const useExp = (itemlist) => {
    const itemMap = itemlist.map((element) => (
        <article className="experience__details" key={element.id}>
          <img className="library_logo" src={element.img} alt={element.title} data-tip={element.title} data-for="tool-tip"/>
        </article>
    ));
    return [itemMap]
}