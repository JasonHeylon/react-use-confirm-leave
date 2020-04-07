# react-use-confirm-leave

> A react hook to show confirmation dialog when user leave or refresh page

[![NPM](https://img.shields.io/npm/v/react-use-confirm-leave.svg)](https://www.npmjs.com/package/react-use-confirm-leave) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-confirm-leave
```

## Usage

```tsx
import * as React from 'react';

import useConfirmLeave from 'react-use-confirm-leave';

const Example = () => {
  const [needConfirm, setNeedConfirm] = useConfirmLeave(false);

  return (
    <div>
      <input type='text' onchange={() => setNeedConfirm(true)} />
      <button onClick={() => setNeedConfirm(false)}>Save</button>
    </div>
  );
};
```

## License

MIT © [JasonHeylon](https://github.com/JasonHeylon)
