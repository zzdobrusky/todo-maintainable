import { ChangeEvent } from 'react';
import { useShortcutKey } from '../hooks/useShortcutKey';

export const SearchInput = ({ performSearch }: { performSearch: (value: string) => void; }) => {
  const { inputRef } = useShortcutKey('s');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    performSearch(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      type='text'
      data-testid='search-input'
      className='todo-input'
      placeholder='Type to search...'
      onChange={handleSearch}
    />
  );
};
