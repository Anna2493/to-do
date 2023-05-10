import './NewItemContainer.css'

function NewItemContainer(){
    return(
        <div className='new-item-container'>
            <form className='form-grid'>
                <label className='label'>Title</label>
                <input className='note-title-input'/>
                
                <textarea className='body-textarea' />
                
                <button className='save-btn' >Save</button>
                <button className='clear-btn' >Clear</button>
  
            </form>
        </div>
    );
}

export default NewItemContainer;