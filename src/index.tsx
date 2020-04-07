import { useState, useEffect } from 'react';

type confirmLeaveType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

const useConfirmLeave = (initalValue?: boolean): confirmLeaveType => {
  const [needConfirm, setNeedConfirm] = useState(Boolean(initalValue));

  useEffect(() => {
    if (needConfirm)
      window.onbeforeunload = (): boolean => {
        return false;
      };

    return (): void => {
      if (needConfirm) window.onbeforeunload = null;
    };
  }, [needConfirm]);

  return [needConfirm, setNeedConfirm];
};

export default useConfirmLeave;
