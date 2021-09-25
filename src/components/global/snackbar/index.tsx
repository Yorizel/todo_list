import React, { useCallback, useEffect, useState } from 'react';
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';

interface ISnackbar {
  open?: boolean;
  message?: string;
  description?: string;
  duration?: number;
}

export const Snackbar: React.FC = () => {
  const [progress, setProgress] = useState(100);
  const [snack, setSnack] = useState<ISnackbar>({
    open: false,
    message: '',
    description: '',
    duration: 3000,
  });
  const handleSnackChange = useCallback((values: ISnackbar) => {
    setSnack((prevState) => ({ ...prevState, ...values }));
  }, []);
  useEffect(() => {
    // y = b-ax
    // a = -(y-b)/x
    // a = -(0-100)/3 = -33.33
    // progress = 100-33.33*T
    if (snack.open) {
      setTimeout(() => {
        setProgress(0);
      });
      setTimeout(() => {
        handleSnackChange({ open: false });
      }, 100000000000);
    }
    if (!snack.open) {
      setTimeout(() => {
        setProgress(100);
      });
    }
  }, [handleSnackChange, snack.duration, snack.open]);
  return (
    <>
      <Transition
        show={snack.open}
        enter="transition ease duration-300 transform"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        <div
          className={
            'fixed px-8 py-12 z-50 bg-green-500 max-w-2xl w-full top-0  inset-x-0 mx-auto rounded-xl mt-4'
          }
        >
          <XIcon
            className={
              'absolute w-8 h-8 top-0 right-0 m-2 text-white cursor-pointer'
            }
            onClick={() => handleSnackChange({ open: false })}
          />
          <div className={'grid place-content-center place-items-center'}>
            <CheckCircleIcon className={'w-16 h-16 mx-auto text-white mb-4'} />

            <p className={'text-white mb-4 text-2xl font-bold w-max'}>
              {snack.message}
            </p>
            <p className={'text-white  text-xl  text-center'}>
              {snack.description}
            </p>

            <div className={`w-full h-2 absolute bottom-0 left-0 `}>
              <Transition
                as={'div'}
                show={snack.open}
                enter={`transition-width `}
                leave={'transition-width '}
                leaveTo={`w-0 duration-[${snack.duration}]`}
                leaveFrom={`w-full`}
                className={`bg-blue-200 h-full  rounded-b-xl`}
              />
              {/* <div */}
              {/*  className={`bg-blue-200 h-full ${ */}
              {/*    progress === 100 ? "rounded-b-xl" : "rounded-bl-xl" */}
              {/*  } transition-all duration-1000`} */}
              {/*  style={{ width: `${progress}%` }} */}
              {/* /> */}
            </div>
          </div>
        </div>
      </Transition>
      <button
        onClick={() =>
          handleSnackChange({
            open: true,
            description: 'boa',
            message: 'boaaa',
          })
        }
      >
        clica
      </button>
    </>
  );
};
