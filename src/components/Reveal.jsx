import { motion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function RevealLines({ lines, className = '', tag = 'h1' }) {
  const Tag = tag
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            initial={{ y: '115%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
