import create from 'zustand'


const useStore = create((set) => ({
    lentilCount: 0,
    incLentil: () => set((state) => ({ lentilCount: state.lentilCount + 1 })),
    decLentil: () => set((state) => ({ lentilCount: state.lentilCount - 1 })),
    chickCount: 0,
    incChick: () => set((state) => ({ chickCount: state.chickCount + 1 })),
    decChick: () => set((state) => ({ chickCount: state.chickCount - 1 })),
    rBeanCount: 0,
    incRbean: () => set((state) => ({ rBeanCount: state.rBeanCount + 1 })),
    decRbean: () => set((state) => ({ rBeanCount: state.rBeanCount - 1 })),
    wBeanCount: 0,
    incWbean: () => set((state) => ({ wBeanCount: state.wBeanCount + 1 })),
    decWbean: () => set((state) => ({ wBeanCount: state.wBeanCount - 1 })),
    blackEyedCount: 0,
    incBlackEyed: () => set((state) => ({ blackEyedCount: state.blackEyedCount + 1 })),
    decBlackEyed: () => set((state) => ({ blackEyedCount: state.blackEyedCount - 1 })),
    matterDalCount: 0,
    incMatterDal: () => set((state) => ({ matterDalCount: state.matterDalCount + 1 })),
    decMatterDal: () => set((state) => ({ matterDalCount: state.matterDalCount - 1 })),
    popcornCount: 0,
    incPopcorn: () => set((state) => ({ popcornCount: state.popcornCount + 1 })),
    decPopcorn: () => set((state) => ({ popcornCount: state.popcornCount - 1 })),
    cashewCount: 0,
    incCashew: () => set((state) => ({ cashewCount: state.cashewCount + 1 })),
    decCashew: () => set((state) => ({ cashewCount: state.cashewCount - 1 })),
    almondCount: 0,
    incAlmond: () => set((state) => ({ almondCount: state.almondCount + 1 })),
    decAlmond: () => set((state) => ({ almondCount: state.almondCount - 1 })),
    pistachioCount: 0,
    incPistachio: () => set((state) => ({ pistachioCount: state.pistachioCount + 1 })),
    decPistachio: () => set((state) => ({ pistachioCount: state.pistachioCount - 1 })),
  }))


export default useStore