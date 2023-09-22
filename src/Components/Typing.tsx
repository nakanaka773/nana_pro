import React from 'react'
import { useState } from 'react';

export default function Typing() {

        const [val, setVal] = useState("");
        const clearVal = () => setVal("");
      
        return (
          <div>
            <label htmlFor="input">ラベル</label>
            <div>

              <textarea
                id="textarea"
                placeholder="こんにちは"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </div>
            <p>{val}</p>
            <button onClick={clearVal}>クリア</button>
          </div>
        );
      };

