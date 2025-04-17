import React from 'react'

function Todo({ formData }) {
  return (
    <div>
        {formData && (
                <div className="navbar-data">
                    <p><strong>ID:</strong> {formData.id}</p>
                    <p><strong>Title:</strong> {formData.title}</p>
                    <p><strong>Completed:</strong> {formData.completed === 'yes' ? 'Yes' : 'No'}</p>
                </div>
            )}
    </div>
  )
}




export default Todo
