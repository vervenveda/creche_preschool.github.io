const MORE_TEMPLATES = {
  magical: [
    (c,s,v)=>`A sprinkle of magic filled ${s} when the ${c} began ${verbToGerundPhrase(v)} beneath the glowing sky.`,
    (c,s,v)=>`The ${c} discovered that ${s} held a secret waiting to be found through ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Deep within ${s}, the ${c} followed a trail of sparkles while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The stars above ${s} seemed to guide the ${c} toward a new adventure of ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A magical breeze carried the ${c} across ${s}, where it continued ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} woke up with a feeling that today was perfect for ${verbToGerundPhrase(v)} in ${s}.`,
    (c,s,v)=>`Hidden wonders appeared around ${s} as the ${c} spent the day ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The smallest sparkle in ${s} became the beginning of the ${c}'s journey to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`Everyone in ${s} whispered about the ${c} and its magical way of ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} carried a tiny lantern through ${s} while searching for a way to ${verbToPlainPhrase(v)}.`
  ],

  discovery: [
    (c,s,v)=>`The ${c} noticed something unusual in ${s} while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Behind a hidden corner of ${s}, the ${c} discovered a reason to keep ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A tiny surprise waited in ${s} when the ${c} decided to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The ${c} had never seen anything like ${s} before beginning to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`A forgotten path appeared before the ${c} as it explored ${s} and began ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} uncovered a hidden treasure while ${verbToGerundPhrase(v)} through ${s}.`,
    (c,s,v)=>`Something wonderful was waiting in ${s}, and the ${c} was ready to discover it by ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The first clue appeared near ${s}, leading the ${c} toward ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} looked closely at every corner of ${s} before choosing to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`A new friendship began in ${s} when the ${c} spent time ${verbToGerundPhrase(v)}.`
  ],

  friendship: [
    (c,s,v)=>`The ${c} learned that the best adventures in ${s} were shared with friends while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A new friend joined the ${c} in ${s}, making ${verbToGerundPhrase(v)} twice as wonderful.`,
    (c,s,v)=>`The ${c} invited everyone in ${s} to join in the joy of ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Together, the friends explored ${s} and discovered the happiness of ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} showed kindness in ${s} by helping others while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A lonely corner of ${s} became cheerful when the ${c} arrived to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The ${c} found that teamwork made ${verbToGerundPhrase(v)} much more fun in ${s}.`,
    (c,s,v)=>`The creatures of ${s} gathered around the ${c} to celebrate ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} shared a smile with every friend it met while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The biggest treasure in ${s} was not gold, but the friendships made while ${verbToGerundPhrase(v)}.`
  ],

  cozy: [
    (c,s,v)=>`A peaceful afternoon arrived in ${s} as the ${c} enjoyed ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} curled up near ${s}, spending a quiet moment ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Soft sounds filled ${s} while the ${c} happily continued ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} found the perfect little place in ${s} for ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Warm sunlight rested over ${s} as the ${c} practiced ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} treasured every peaceful moment spent ${verbToGerundPhrase(v)} in ${s}.`,
    (c,s,v)=>`A gentle day unfolded in ${s} while the ${c} discovered the joy of ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The quiet corners of ${s} welcomed the ${c} and its habit of ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} found comfort in ${s} while enjoying a simple day of ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Even the flowers of ${s} seemed happy when the ${c} spent time ${verbToGerundPhrase(v)}.`
  ],

  challenge: [
    (c,s,v)=>`The ${c} faced a tiny challenge in ${s}, but bravely continued to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`Something unexpected happened in ${s}, and the ${c} had to find a way to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The path through ${s} was difficult, but the ${c} never stopped ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} wondered if it could succeed, then tried ${verbToGerundPhrase(v)} once more.`,
    (c,s,v)=>`A storm of leaves swept through ${s}, testing the ${c} as it tried to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The ${c} discovered courage while facing a new challenge in ${s}.`,
    (c,s,v)=>`Although the journey through ${s} was tricky, the ${c} kept ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} almost gave up in ${s}, until a small friend helped it continue ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A mysterious obstacle appeared in ${s}, and the ${c} prepared to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The ${c} learned something important after trying to ${verbToPlainPhrase(v)} in ${s}.`
  ]
};
