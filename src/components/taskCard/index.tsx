import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ClockIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';

export const TaskCard: React.FC = () => {
  return (
    <div
      className={'w-64 h-52 rounded-lg shadow-2xl bg-white flex flex-col p-4'}
    >
      <Menu as={'div'} className={'inline-block ml-auto text-left'}>
        <div>
          <Menu.Button
            className={
              'w-12 h-8 bg-white flex justify-center py-2 text-gray-400'
            }
          >
            <DotsHorizontalIcon className={'h-4 w-4'} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <PencilIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <PencilIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <TrashIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <TrashIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className={'bg-none mb-auto mt-auto px-2 flex text-left'}>
        [Memoji] - Create Prototype Mobile for Get Notification in Principle
      </div>
      <div
        className={
          'bg-yellow-500 text-white rounded-lg text-center w-20 p-1 flex'
        }
      >
        <div className={'w-1/5 h-1/5 mt-1 mr-1'}>
          <ClockIcon />
        </div>
        Mar 26
      </div>
    </div>
  );
};
