import React from 'react'; 

const SelectionMenu = () => {
    return(
        <section className="selectionMenu">
            <h2>make a choice</h2>
            <form onSubmit={handleSubmit} action="" id="userSelectionMenu">
                <label htmlFor="" className="sr-only">make a choice</label>
                <button type="submit" value="anger">anger</button>
                <button type="submit" value="joy">joy</button>
                <button type="submit" value="sadness">sadness</button>
                <button type="submit" value="tranquil">tranquil</button>
                <button type="submit" value="empty">empty</button>
            </form>
        </section>
    )
}

export default SelectionMenu