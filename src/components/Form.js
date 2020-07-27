import React from 'react';

const Form = props => {
    const buttonClicked = event => {
        event.preventDefault();
        props.submitListener();
    }

    const changeEvent = event => {
        let username = event.target.value;
        props.changeEvent(username);
        event.target.value = '';
    }

    return (
        <form className='w-full max-w-sm mx-auto'>
            <div className='mt-10 flex'>
                <input
                onChange={changeEvent}
                type='text'
                placeholder='GitHub username'
                className='form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150'
                required
                value={props.username}
                />
                <button
                type='submit'
                className='ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out'
                onClick={buttonClicked}
                >
                Search
                </button>
            </div>
        </form>
    );
}

export default Form;