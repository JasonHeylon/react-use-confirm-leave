import React from 'react';

import useConfirmLeave from 'react-use-confirm-leave';

const App = () => {
  const [needConfirm, setNeedConfirm] = useConfirmLeave(false);

  const className = needConfirm ? 'container modified' : 'container';

  return (
    <div className={className}>
      <textarea
        name='editor'
        onChange={() => setNeedConfirm(true)}
        cols='30'
        rows='10'
      />
      <div>{needConfirm && <em>You need save before leave</em>}</div>

      <button onClick={() => setNeedConfirm(false)}>Save</button>

      <a href='https://github.com/JasonHeylon/react-use-confirm-leave'>
        Leave to Github
      </a>
    </div>
  );
};
export default App;
