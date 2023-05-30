import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://i.pinimg.com/originals/a4/47/f2/a447f2a3ec3f4a12f7caf1c653e7cb38.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://i.pinimg.com/originals/a4/47/f2/a447f2a3ec3f4a12f7caf1c653e7cb38.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>

        </div>
        <div className="col">
            <div className="row">
                <img src="https://i.pinimg.com/originals/a4/47/f2/a447f2a3ec3f4a12f7caf1c653e7cb38.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://i.pinimg.com/originals/a4/47/f2/a447f2a3ec3f4a12f7caf1c653e7cb38.jpg" alt="" />
                        <button>
                            <Link className="link" to="/products/1">Sale</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://i.pinimg.com/originals/a4/47/f2/a447f2a3ec3f4a12f7caf1c653e7cb38.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://i.pinimg.com/originals/a4/47/f2/a447f2a3ec3f4a12f7caf1c653e7cb38.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
