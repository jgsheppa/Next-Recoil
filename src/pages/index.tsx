import React from 'react';
import { MutableSnapshot, RecoilRoot, RecoilState, atom, useRecoilValue } from 'recoil';
import { userAtom, User, dateAtom } from '../../recoil/atoms';
import UserInfo from '../../components/User';

type HomeProps = {
  initialRecoilState: any;
}

const ssrAtoms: Record<string, RecoilState<User | undefined>> = {
  userAtom
}

const initializeRecoilState = (initialRecoilState: Record<string, any>, atomList: Record<string, RecoilState<User | undefined>>) => ({ set }: MutableSnapshot) => {
  const ssrAtomKeys = Object.values(atomList).map(atom => atom.key)

  return Object.keys(initialRecoilState).map((key) => {
    if (ssrAtomKeys.includes(key)) {
      const value = initialRecoilState[key]
      const atom = ssrAtoms[key]

      set(atom, value)
    } else {
      console.debug(`Recoil atom ${key} not found in ssrAtoms object!`)
      throw new Error('Recoil atom not found in ssrAtoms object!')
    }
  });
}

export default function Home({ initialRecoilState = {} }: HomeProps) {
  const date = useRecoilValue(dateAtom)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Month: {date}</p>
      <RecoilRoot initializeState={initializeRecoilState(initialRecoilState, ssrAtoms)} >
        <UserInfo/>
      </RecoilRoot>
    </main>
  )
}

export async function getServerSideProps() {
  // This data would normally come from an API call.
  // For this example, the data will be hard-coded.
  const userAtom: User = {
    name: 'James',
    age: 31
  }

  // Place the data inside of an initial Recoil
  // state object.
  const initialRecoilState = {
    userAtom
  }

  // Pass initial state via props.
  return { props: { initialRecoilState } };
}