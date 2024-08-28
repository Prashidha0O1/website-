import { motion } from 'framer-motion'

const RippleEffect = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-green-500"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [1, 0], scale: [1, 2] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-green-500"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [1, 0], scale: [1, 2] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
        <div className="relative w-2.5 h-2.5 rounded-full bg-green-500"></div>
      </div>
      <span className="text-green-500 bg-emerald-200/20 border border-emerald-700 bg-opacity-50 backdrop-blur-lg rounded-md px-2 py-1 font-medium">
        Open for Projects
      </span>{' '}
    </div>
  )
}

export default RippleEffect
