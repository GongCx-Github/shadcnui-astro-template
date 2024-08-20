import { Button } from '@/components/ui/button'
import { useStore } from '@/stores/useStore'

export function IndexView() {
  const { count, inc } = useStore()

  return (
    <div>
      <Button onClick={inc}>Increment</Button>
      <p>{count}</p>
    </div>
  )
}
