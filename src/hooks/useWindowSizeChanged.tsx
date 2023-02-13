import { DEVICE } from '@constants/index';
import { useEffect, useState } from 'react';

const WINDOW_SIZE: any = {
  [DEVICE.MOBILE]: (size: number) => size <= 640,
  [DEVICE.TAB]: (size: number) => size > 640 && size <= 1007,
  [DEVICE.DESKTOP]: (size: number) => size > 1007
};

export function useWindowSizeChanged() {
  const [device, setDevice] = useState<string | null>(null);
  useEffect(() => {
    const selectedDevice = Object.keys(WINDOW_SIZE).find((i: any) =>
      WINDOW_SIZE[i](window.innerWidth)
    );
    if (selectedDevice) {
      setDevice(selectedDevice);
    }

    window.addEventListener('resize', (e: any) => {
      const selectedDevice = Object.keys(WINDOW_SIZE).find((i: any) =>
        WINDOW_SIZE[i](window.innerWidth)
      );
      if (selectedDevice) {
        setDevice(selectedDevice);
      }
    });
  }, []);
  return device;
}
