'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/${searchTerm}/`);
    setSearchTerm('');
  };
  return (
    <form onSubmit={submitHandler} className="form-control flex flex-row">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        className="input input-bordered w-40 md:w-auto"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-primary rounded-full ml-2 ">
        🚀
      </button>
    </form>
  );
}
